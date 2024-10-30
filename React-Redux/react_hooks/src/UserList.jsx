import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b
                style={{
                    cursor: "pointer",
                    color: user.active ? "green" : "black",
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

const UserList = ({ users, onRemove, onToggle }) => {
    return (
        <div>
            {users.map((user) => (
                <User
                    key={user.email}
                    user={user}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default UserList;
