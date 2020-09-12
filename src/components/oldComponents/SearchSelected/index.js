import React from 'react'

export default function SelectedUsers(props) {
    const { users } = props;
    const selectedUsersList = users.filter(u => u.isSelected);
    return (
        <ul>
            {selectedUsersList.map((u) => (
                <li key = {u.id}>
                    {u.fName} {u.id}
                </li>
            ))}
        </ul>
    )
}