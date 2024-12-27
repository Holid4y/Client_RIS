import React, { useState } from 'react';
import './FriendsList.css';

interface Friend {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    status: string;
    description: string;
}

const friendsData: Friend[] = [
    { id: 1, firstName: 'Anna', lastName: 'Smith', image: '/src/assets/img/people/women/01.jpg', status: 'Online', description: 'Loves hiking and photography.' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', image: '/src/assets/img/people/women/02.jpg', status: 'Offline', description: 'Passionate about music and art.' },
    { id: 3, firstName: 'Emily', lastName: 'Johnson', image: '/src/assets/img/people/women/03.jpg', status: 'Online', description: 'Enjoys reading and traveling.' },
    { id: 4, firstName: 'Sara', lastName: 'Williams', image: '/src/assets/img/people/women/04.jpg', status: 'Away', description: 'Loves cooking and gardening.' },
    { id: 5, firstName: 'Kate', lastName: 'Brown', image: '/src/assets/img/people/women/05.jpg', status: 'Online', description: 'Fitness enthusiast and yogi.' },
    { id: 6, firstName: 'Lauraqweqweqwe', lastName: 'Jonqweqweqwes', image: '/src/assets/img/people/women/06.jpg', status: 'Offline', description: 'Enjoys painting and nature walks.' }
];

const FriendsList: React.FC = () => {
    const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

    const openModal = (friend: Friend) => {
        setSelectedFriend(friend);
    };

    const closeModal = () => {
        setSelectedFriend(null);
    };

    return (
        <div className='profile-friends'>
            <div className="friends-container">
                {friendsData.map((friend) => (
                    <div 
                        key={friend.id} 
                        className="friend-card" 
                        onClick={() => openModal(friend)}
                    >
                        <div className="friend-image">
                            <img src={friend.image} alt={`${friend.firstName} ${friend.lastName}`} />
                        </div>
                        <div className="friend-info">
                            <h4>{friend.firstName}</h4>
                            <h5>{friend.lastName}</h5>
                        </div>
                    </div>
                ))}
            </div>

            {/* Модальное окно */}
            {selectedFriend && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content-f" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-left-f">
                            <img src={selectedFriend.image} alt={`${selectedFriend.firstName} ${selectedFriend.lastName}`} />
                        </div>
                        <div className="modal-right-f">
                            <h2>{selectedFriend.firstName} {selectedFriend.lastName}</h2>
                            <p><strong>Status:</strong> {selectedFriend.status}</p>
                            <p>{selectedFriend.description}</p>
                            <div className="modal-actions-f">
                                <button className="btn sm secondary">Написать сообщение</button>
                                <button className="btn sm dark">Добавить в друзья</button>
                            </div>
                        </div>
                        <button className="close-btn-f" onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FriendsList;
