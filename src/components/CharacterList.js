import React from 'react'
import CharacterListItems from './CharacterListItems'

function CharacterList({ items }) {
  return (
    <section className='cards'>
        {
            items.map((item) => (
                <CharacterListItems item={item} key={item.char_id} />
            ))
        }
    </section>
  )
}

export default CharacterList