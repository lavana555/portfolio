import React from 'react';
import styles from './Contacts.module.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import axios from 'axios'


class Contacts extends React.Component {

  state={
    name:'',
    email:'',
    description:''
  }

  changedName=(e)=>{
    let newname=e.target.value
    this.setState({
      name:newname
    })

  }
  changedEmail=(e)=>{
    let newemail=e.target.value
    this.setState({
      email:newemail
    })
  }

  changedDescription=(e)=>{
    let newDescription=e.target.value
    this.setState({
      description:newDescription
    })
  }
  
  clickForm=()=>{
    // alert([this.state.name,this.state.email,this.state.description])
    axios.post("https://smtp-portfolio-server.herokuapp.com/sendMessage",{
      name:this.state.name,
      email:this.state.email,
      description:this.state.description
    }).then(()=>alert("your message has been send"))

  }

  render() {


    return (
        <div id="contacts" className={styles.Contacts}>
          <div className={styles.container}>
            <div className={styles.contactTitle}>
              <Bounce top>
                <h2 className={styles.title}>Контакты</h2>
              </Bounce>
              <div className={styles.line}></div>
            </div>

            <form className={styles.forms} id="form" onSubmit={this.handlerSubmit}>
              <Slide left cascade>
                <input type="text" placeholder="Your Name" id="name" value={this.state.name} onChange={this.changedName}/>
                <input type="text" placeholder="Your E-mail" value={this.state.email} onChange={this.changedEmail}/>
                <textarea className={styles.messageArea} placeholder="Your message" value={this.state.description} onChange={this.changedDescription}></textarea>
              </Slide>
              <input className={styles.button} onClick={this.clickForm} value="отправить"/>
              {/*<button className={styles.button}  onClick={this.clickForm}>отправить</button>*/}
            </form>
            <div>

            </div>
          </div>
        </div>
    );
  }
}

export default Contacts;
