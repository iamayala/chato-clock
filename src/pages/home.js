import React from 'react'
import '../assets/style/index.css'

function Home() {
  return (
    <>
    <section className='chat__main_body'>
        <section className='chat_section'>
            <div className='chat_section__header'>
                <div className='chat_header__title'>
                    <h1>Messages</h1>
                    <div className='chat_header__counter'>
                        <span>3</span>
                    </div>
                </div>
                <div className='chat_header__search'>
                    icon
                </div>
            </div>

            <div className='chat_tab'>
                <div className='chat_tab__item chat_tab__active'>All Conversations</div>
                <div className='chat_tab__item'>Archived</div>
                <div className='chat_tab__item'>Starred</div>
            </div>

            <div className='chat_messages'>

                <div className='chat_messages_newmessage'>
                    <span>+</span>
                </div>


                <div className='chat_messages_card'>
                    <img className='chat_messages_card_profile' src="https://i.pinimg.com/originals/c9/63/13/c963130454589d71620596e2d5851202.jpg" alt="Logo" />

                    <div className='chat_message_card_content'>
                        <div className='chat_message_card_content__header'>
                            <h4>Kanye West</h4>
                            <span>2 hours ago</span>
                        </div>
                        <div className='chat_message_card_content_body'>
                            <p style={{color:'#2d2d2d'}}>Hello world, this is kanye west, the one and only.</p>
                            <div className='chat__counter'>
                                <span>3</span>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className='chat_messages_card chat_messages_active'>
                    <img className='chat_messages_card_profile' src="https://i.pinimg.com/originals/c9/63/13/c963130454589d71620596e2d5851202.jpg" alt="Logo" />

                    <div className='chat_message_card_content'>
                        <div className='chat_message_card_content__header'>
                            <h4>Kanye West</h4>
                            <span>2 hours ago</span>
                        </div>
                        <div className='chat_message_card_content_body'>
                            <p style={{color:'#2d2d2d'}}>Hello world, this is kanye west, the one and only.</p>
                            <div className='chat__counter'>
                                <span>3</span>
                            </div>
                        </div>
                    </div>

                    
                </div>

            </div>

        </section>


        {/* chat section */}
        <section className='convo_section'>

            <section className='convo__header'>

                <div className='convo__sender__info'>
                    <div className='convo__sender_tag'>
                        <img className='sender__profile' src="https://i.pinimg.com/originals/c9/63/13/c963130454589d71620596e2d5851202.jpg" alt="Logo" />
                        <div className='sender__names'>
                            <h3>Kanye West</h3>
                            <span>Online</span>
                        </div>
                    </div>
                    <div className='convo__more'>
                        <span>he</span>
                    </div>
                </div>


                <div className='convo__my_info'>
                    <div className='convo__myinfo_tag'>
                        <span>Jules Caesar</span>
                        <img className='my__profile' src="https://i.pinimg.com/originals/c9/63/13/c963130454589d71620596e2d5851202.jpg" alt="Logo" />
                    </div>
                </div>

            </section>

            <sction className="convo__down">
                
                
                <section className='convo__chat_section'>
                    
                    
                    <section className='convo__chat'>

                        {/* sender */}
                        <div className='sender__message'>
                            <img className='sender__p' src="https://i.pinimg.com/originals/c9/63/13/c963130454589d71620596e2d5851202.jpg" alt="Logo" />

                            <div className='sender__content'>
                                <div className='sender_pview'>
                                    <p>This is a sample message</p>
                                    <span>...</span>
                                </div>
                                <span>today</span>
                            </div>

                        </div>

                        <div className='me__message'>
                            <div className='me__content'>
                                <div className='me_pview'>
                                    <span>...</span>
                                    <p>hi</p>
                                </div>
                                <div className='me_timestamp'>
                                    <span>today</span>
                                    <span>today</span>
                                </div>
                            </div>

                        </div>

                    </section>
                    
                    
                    <div className='convo_input'>
                        <div className='convo__inputview'>
                            <input placeholder='Write message...' className='convo__inputfield' />
                        </div>
                        <button className='convo__sender'>p</button>
                    </div>
                </section>
                
                
                <section className='convo__profile_info'>
                    <div className='convo__image_section'>
                        <img className='convo__profile_photo' src="https://i.pinimg.com/originals/c9/63/13/c963130454589d71620596e2d5851202.jpg" alt="Logo" />

                        <div>
                            <h2>Kanye West</h2>
                            <span>@ye</span>
                        </div>
                    </div>
                    <div className='convo__media_section'>
                        <h4 style={{ marginLeft: 5, marginBottom: 10 }}>Photos and Multimedia</h4>
                        <div className='convo__image_gallery'>
                            <img src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" alt='graduation' className='convo__shared__image' />
                            <img src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" alt='graduation' className='convo__shared__image' />
                            <img src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" alt='graduation' className='convo__shared__image' />
                            <img src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" alt='graduation' className='convo__shared__image' />
                            <div className='convo__shared__image see__all'>
                                <span>See All...</span>
                            </div>
                        </div>

                    </div>

                    <div className='convo__file_section'>
                        <h4 style={{ marginLeft: 5, marginBottom: 10 }}>Attachments</h4>

                        <div className='convo__shared_file_card'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/1200px-Icon_pdf_file.svg.png" alt='file' className='convo__shared__file_icon' />
                            <p>Filename.pdf</p>
                        </div>
                        <div className='convo__shared_file_card'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/1200px-Icon_pdf_file.svg.png" alt='file' className='convo__shared__file_icon' />
                            <p>Filename.pdf</p>
                        </div>

                    </div>
                </section>
            </sction>

        </section>


    </section>    
    </>
  )
}

export default Home