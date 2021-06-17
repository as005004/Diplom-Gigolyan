import React from 'react'
import PropTypes from 'prop-types'

class TableRow extends React.Component {

    render(){
        const {data, onItemClick} = this.props

        return(
            <tr>
                {data.map((item, idx) => (
                <td onClick= {() => onItemClick(idx)}>{item}</td>
                ))}
            </tr>
        )
    }
}
TableRow.propTypes = {
data: PropTypes.array.isRequired,
onItemClick: PropTypes.func.isRequired,
}
export default TableRow