import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import AppInput from '../components/AppInput';
import colors from '../config/colors';
import FuncButton from '../components/FuncButton';
import TemplateModal from '../components/TemplateModal';
import TemplateCard from '../components/TemplateCard';
import routes from '../navigation/routes';

function SmsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false)
  const [templates, setTemplates] = useState([])
  const [templateText, setTemplateText] = useState("")
  const [EditModalVisible, setEditModalVisible] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [templateToEdit, setTemplateToEdit] = useState(null)
  const [number, setNumber] = useState("")
  const navigation = useNavigation()

  const loadTemplates = async () => {
    try {
      const templates = await AsyncStorage.getItem("templates")
   
      if (templates !== null) setTemplates(JSON.parse(templates))
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnSubmit = async (template) => {
    try {
      const templateText = {id: Date.now(), template}
      const newTemplates = [...templates, templateText]

      setTemplates(newTemplates)
      await AsyncStorage.setItem("templates", JSON.stringify(newTemplates))
      
    } catch (error) {
      console.log(error)
    }
  }
  const handleOnDelete = async (id) => {
    try {
      const newTemplates = templates.filter(item => item.id !== id)
      setTemplates(newTemplates)
      await AsyncStorage.setItem("templates", JSON.stringify(newTemplates))
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleSend = (text) => {
    if(text === "") return alert("Please compose a message")
    navigation.navigate(routes.SELECT_CONTACT, {text})
    setTemplateText("")
  }
  const handleEditClose = () => {
    setEditModalVisible(false)
  }
  const handleEditPress = (item) => {
    setIsEdit(item)
    setTemplateToEdit(item)
    setEditModalVisible(true)
  }
  const handleUpdateTemplate = async (template) => {
    const result = await AsyncStorage.getItem("templates");
    let templatesArr = [];
    if(result !== null) {templatesArr = JSON.parse(result)}
    
    const newTemplates = templatesArr.filter(t => {
      if(t.id === templateToEdit.id){
        t.template = template
        isUpdated = true
      }
      return t
    })

    setTemplates(newTemplates)
    await AsyncStorage.setItem("templates", JSON.stringify(newTemplates))
  }

 useEffect(() => {
   loadTemplates()
  }, [])
 
  return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ marginBottom: -120, gap: 5}}>
          <AppInput
            placeholder="Enter number (if not in contacts)"
            keyboardType="number-pad"
            placeholderTextColor={colors.parsley}
            style={[styles.input, styles.numberInput]}
            height={50}
            value={number}
            onChangeText={text => setNumber(text)}
          />
          <AppInput 
            value={templateText}
            onChangeText={text => setTemplateText(text)}
            placeholder="Compose SMS here"
            placeholderTextColor={colors.goblin} 
            style={styles.input}
            multiline
          />
          <FuncButton
            icon="send"
            iconColor={colors.decorLite}
            name="Send"
            size={25}
            color={colors.primary}
            onPress={() => handleSend(templateText)}
            style={{marginTop: 120, alignSelf: 'flex-end', width: 120, height: 40}}
          />
        </View>
        <View style={styles.templateBox}>
          <View style={styles.templateHead}>
            <AppText style={styles.templateText}>Templates</AppText>
            <TouchableOpacity 
              onPress={() => setModalVisible(true)}
              style={styles.addTemplate}
            >
              <AppText style={{color: colors.decorLite, fontSize: 16, fontWeight: "400",}}>Add Template</AppText>
              <MaterialCommunityIcons name="plus" size={25} color={colors.decorLite} />
            </TouchableOpacity>
          </View>
          <View style={styles.templateBody}>
            {templates.length ? <FlatList
              data={templates}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <TemplateCard 
                                        item={item} 
                                        onPress={() => setTemplateText(item.template)}
                                        delPress={() => handleOnDelete(item.id)}
                                        editPress={() => {
                                          handleEditPress(item)
                                        }}
                                      />}
            /> : null}
            {templates.length === 0 && <AppText style={{alignSelf: 'center',}}>No templates yet</AppText>}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
      <TemplateModal 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
      <TemplateModal 
        visible={EditModalVisible}
        onClose={handleEditClose}
        onSubmit={handleUpdateTemplate} 
        isEdit={isEdit}
        templateToEdit={templateToEdit}
      />
    </>
  );
}

const styles = StyleSheet.create({
  addTemplate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.parsley,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  container: {
    padding: 10,
    flex: 1,
  },
  input: {
    width: '100%',
    height: 200,
    paddingLeft: 10,
    backgroundColor: colors.decor,
    color: colors.parsley,
    fontWeight: "normal",
    borderWidth: 2,
    borderColor: colors.goblin,
  },
  numberInput: {
    height: 50,
    fontSize: 16,
  },
  templateBody: {
    padding: 10,
    overflow: 'hidden',
    height: "100%",
    paddingBottom: 65,
  },
  templateBox: {
    backgroundColor: colors.decor,
    height: "50%",
    marginTop: 128,
    borderWidth: 2,
    borderColor: colors.goblin,
    overflow: 'hidden',
  },
  templateHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.primary,
  },
  templateText: {
    color: colors.decorLite,
    fontWeight: "400",
    textTransform: "uppercase",
  }
});

export default SmsScreen;