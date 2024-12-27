import SVG from "../../../components/SVG/SVG";

function NewMusicAccordion() {
    return (
        <>
            <div className="top-card-header">
                <span className="title">Плейлисты</span>
            </div>
            <div className="media-container block">
                <div className="card">
                    <img src="images/albom/albom-0002.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Холод</span>
                            <small>Kai Angel</small>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="images/albom/albom-0003.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Холод</span>
                            <small>Kai Angel ft. Holiday</small>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="images/albom/albom-0004.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Холод</span>
                            <small>Kai Angel</small>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="images/albom/albom-0005.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Холод</span>
                            <small>Kai Angel</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="media-container line">
                <div className="top-card-header">
                    <span className="title">Треки</span>
                </div>
                <div className="card">
                    <img src="images/albom/albom-0003.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Холод</span>
                            <small>Kai Angel</small>
                        </div>
                        <button className="icon-btn">
                            <span className="time">2:40</span>
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/albom/albom-0002.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Холод</span>
                            <small>Kai Angel</small>
                        </div>
                        <button className="icon-btn">
                            <span className="time">2:40</span>
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/albom/albom-0001.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Холод</span>
                            <small>Kai Angel</small>
                        </div>
                        <button className="icon-btn">
                            <span className="time">2:40</span>
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewMusicAccordion;
