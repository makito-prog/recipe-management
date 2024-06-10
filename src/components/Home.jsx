import React from 'react'
import Header from './Header'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <Header />
        <div className='block'>
            <h2 className='sub-title'>レシピ管理アプリとは</h2>
            <p className='description'>レシピを管理するアプリです。</p>
        </div>
        <div className='block'>
            <h2 className='sub-title'>どんな機能があるの？</h2>
            <p className='description'>一度作ったレシピを保存することができます。</p>
            <p className='description'>そのレシピを検索をしていつでも見ることができます</p>
        </div>
        <div className='block'>
            <h2 className='sub-title'>まず何をすればいいの？</h2>
            <p className='description'>レシピ追加ページに移動してレシピを追加してみてください</p>
        </div>
    </div>
  )
}

export default Home