/* eslint-disable prettier/prettier */

import {Component} from 'react'

import './style.css'

import HistoryItem from '../historyItem'


const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

export default class HistorySearch extends Component {
    state={searchResult:'',
    searchDetails:initialHistoryList


}


searchresult=(event)=>{
const Result=event.target.value
this.setState({searchResult:Result})



}


 delete=(id)=>{
    
const {searchDetails}=this.state
const filteredList=searchDetails.filter(each=>each.id!==id) 

     this.setState({searchDetails:filteredList})

}

  render() { 
      const {searchResult,searchDetails}=this.state 

    

const newHistory=searchDetails.filter(eachHistory=>eachHistory.title.toLowerCase().includes(searchResult.toLowerCase()))

    return (
      <div className="app-container">

      
        {/* input container */}
        <div className="history-input-container">
          <div className="heading-container">
            <img
              alt="app logo"
              className="heading-history"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
          </div>
          <div className="input-container">
            <div className="search-logo-container">
              <img
                className="search-logo"
                alt="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <input
              type="search"
              className="input-element"
              placeholder="Search History"
              onChange={this.searchresult}
            />
          </div>
        </div>



        {/* history container */}
        <div className="history-container">
          <ul className='inner-history-container'>
{/* console.log(newHistory.length) */}
               { newHistory.length===0?(<div className='error'><p>There is no history to show</p></div>):
newHistory.map(eachUser=>(
                                  <HistoryItem searchDetails={eachUser} deleted={this.delete} key={eachUser.id} />

                  )) 

               }
               
             {/* newHistory.map(eachUser=>(
                                  <HistoryItem searchDetails={eachUser} deleted={this.delete} key={eachUser.id} />

                  ))   */}
                
                   
               
               
               
               
        

                {/* {
                  newHistory.map(eachUser=>(
                                  <HistoryItem searchDetails={eachUser} deleted={this.delete} key={eachUser.id} />

                  ))  
                } */}
          </ul>
        </div>


      </div>
    )
  }
}
