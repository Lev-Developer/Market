import {createContext} from 'react'
import {useState} from 'react'

interface IModalContext {
  modal: boolean
  openModalW: () => void
  closeModalW: () => void

}
export const ModalContext = createContext<IModalContext>({
  modal: false,
  openModalW: () => {},
  closeModalW: () => {}
})

export const  ModalState = ({children}: {children: React.ReactNode}) => {
  const [modal, setModal] =  useState(false)

  const openModalW = () => setModal(true)
  const closeModalW = () => setModal(false)

  return(
    <ModalContext.Provider value={{modal, openModalW, closeModalW }} >
      {children}
    </ModalContext.Provider>
  )
}