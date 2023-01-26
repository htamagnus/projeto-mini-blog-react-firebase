import React from 'react'
import styles from './Footer.module.css'
import { BiHeart } from 'react-icons/bi'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Mini Blog &copy; 2023</p>
        <p>Feito com <BiHeart /> por Ágatha Magnus</p>
    </footer>
  )
}
