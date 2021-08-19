import React from 'react'

const Image = ({ nameDocs }) => {

    nameDocs.map(collName => {
        console.log(collName.name)
    })
}

export default Image;