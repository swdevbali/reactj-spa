import React from 'react'
import Person from './person'

class People extends React.Component {
    render(){
        return (
                <div>
                <Person name="Eko" address="Maesan" marriage={1} />
                <Person name="Ela" address="Maesan" />
                </div>
        )
    }
}

export default People
