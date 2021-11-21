import React from 'react';
import {ListGroup} from "react-bootstrap";


const DescriptionComponent = ({departureValue = '', arrivalValue = ''}) => {
  const isShow = departureValue.airport !== '' && departureValue.airport && arrivalValue.airport !== '' && arrivalValue.airport;

  return <>
    {isShow && <ListGroup style={{marginTop: '1rem'}}>
      <ListGroup.Item>Abflug: {departureValue.airport} Ankunft: {arrivalValue.airport}</ListGroup.Item>
    </ListGroup>}
  </>
}

export default DescriptionComponent;
