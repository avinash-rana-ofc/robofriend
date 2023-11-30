import React from "react";
import Card from "./Card";

const cardArray = ({robots}) => {
    const cardComponent = robots.map((users,i) => {
        return <Card key = {robots[i].id} id = {robots[i].id} name = {robots[i].name} email = {robots[i].email} />
    })

    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default cardArray;

