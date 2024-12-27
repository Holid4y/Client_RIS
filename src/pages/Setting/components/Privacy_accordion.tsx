function PrivacyAccordion() {
    return (
        <>
            <div className="dropdown">
                <label htmlFor="filter-lang">Кто видит мой профиль:</label>

                <select name="filter-lang" id="filter-lang">
                    <option value="all">Все</option>
                    <option value="friends">Только друзья</option>
                    <option value="none">Ни кто</option>
                </select> 
            </div>
            <div className="dropdown">
                <label htmlFor="filter-lang">Кто видит мои изображения:</label>

                <select name="filter-lang" id="filter-lang">
                    <option value="all">Все</option>
                    <option value="friends">Только друзья</option>
                    <option value="none">Ни кто</option>
                </select> 
            </div>
            <div className="dropdown">
                <label htmlFor="filter-lang">Кто видит список моих друзей:</label>

                <select name="filter-lang" id="filter-lang">
                    <option value="all">Все</option>
                    <option value="friends">Только друзья</option>
                    <option value="none">Ни кто</option>
                </select> 
            </div>
            <div className="dropdown">
                <label htmlFor="filter-lang">Кто видит список моей музыки:</label>

                <select name="filter-lang" id="filter-lang">
                    <option value="all">Все</option>
                    <option value="friends">Только друзья</option>
                    <option value="none">Ни кто</option>
                </select> 
            </div>
            <div className="dropdown">
                <label htmlFor="filter-lang">Кто может мне писать сообщения:</label>

                <select name="filter-lang" id="filter-lang">
                    <option value="all">Все</option>
                    <option value="friends">Только друзья</option>
                    <option value="none">Ни кто</option>
                </select> 
            </div>
        </>
    )
}
export default PrivacyAccordion;
