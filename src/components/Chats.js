import React from 'react';
import {useHistory} from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import {auth} from '../firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push("/");
    }
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    MyTalk
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="2bf36bbb-4102-4610-a236-8b8b8f5b9712"
                userName="."
                userSecret="."
            />

        </div>
    )
}
export default Chats;