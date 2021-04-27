import React, { useState } from 'react'
import './sendFleek.css'

const fleek = require('@fleekhq/fleek-storage-js'); 
const apiKey = 'nQVw4GBl4nYFZm85pKDuNA=='
const apiSecret = '+sTBx4vvdiZ2qX3lLgxJzPwrnVJU+0VgKEbDEVBgxk4='

const SendFleek = () => {

    const [ data, setData ] = useState([])
    const [ category, setCategory ] = useState('Vehicles')

    let key = category + '/object1.jpg'
  
    const input = {
        apiKey,
        apiSecret,
        key: key,
        data
    }

    const upLoadVolume = async (e) => {
        const file = e.target.files[0]
        const buffer = await convertBuffer(file)
        console.log(buffer)
        setData(buffer)
        // console.log(data)
    }

    const convertBuffer = (file) => {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = () => {
            resolve(Buffer(fileReader.result))
        }

        fileReader.onerror = (error) => {
            reject(error);
        }
        })
    }

    const sendToFleek = async (data) => {

        console.log('Submitting file...')
        try {
            const result = await fleek.upload(input);
            console.log(result)
        } catch(e) {
            console.log('error', e)
        }
    }

    const handleChange = (e) => {
        setCategory(e.target.value)
    }
    
    return (
        <>
        <div>
            <form className='submit_button'>
                <select value={category} onChange={handleChange}>
                    <option value='Vehicles'>Vehicles</option>
                    <option value='Houseware'>Houseware</option>
                    <option value='Animals'>Animals</option>
                    <option value='Technology'>Technology</option>
                    <option value='Food'>Food</option>
                    <option value='Clothing'>Clothing</option>
                </select>
            </form>
            <input type='file' onChange={upLoadVolume}  name='volume' id='choose_file' />
            <input type='submit' id='send_file' onClick={(e) => {sendToFleek(data)}} />
        </div>
            
        </>  
    )
}

export default SendFleek;
