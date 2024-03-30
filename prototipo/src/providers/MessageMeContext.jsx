import { createContext, useContext } from 'react'
import { NotifyError, NotifySucess } from '../components/fragments'
import { UserAdmContext } from '.'
import { api } from '../services'

export const MessageMeContext = createContext([])

export const MessageMeProvider = ({ children }) =>{
    const { messageList, setMessageList } = useContext(UserAdmContext)

    const messageMeRegister = async (payLoad, setLoading, reset) =>{
        try {
            setLoading(true)            
            const { data } = await api.post('/user/message', payLoad)

            setMessage( [ ...messageList, data] )
            NotifySucess('Message sent successfully')            
            reset()
        } catch (error) {
            console.log(error)
            NotifyError('Unfortunately something went wrong')
        }finally{
            setLoading(false)
        }
    }

    const messageMeDelete = async (messageId) => {
        try {
            await api.delete(`/user/message/${messageId}`)
            const newMessageList = messageList.filter((message) => message.id !== messageId) 
            setMessageList(newMessageList)
            NotifySucess('Message delete successfully')            
        } catch (error) {
            console.log(NotifyError('Unfortunately something went wrong'))            
        }
    }

    return(
        <MessageMeContext.Provider value={
            {
                messageMeRegister,
                messageMeDelete
            }
        }
        >
            {children}
        </MessageMeContext.Provider>
    )
}