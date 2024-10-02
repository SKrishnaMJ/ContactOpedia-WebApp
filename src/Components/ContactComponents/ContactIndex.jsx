import React from "react"
import Header from "../Layout/Header";
import AddRandomContact from "./RemoveAllContacts copy";
import RemoveAllContact from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactList: [
                {
                    id: 1,
                    name : "Sai Krishna M J",
                    phone: "123-456-789",
                    email: "saikrishna@gmail.com",
                    isFav: false,

                },
                {
                    id: 2,
                    name : "Ritika Ghanti",
                    phone: "133-156-489",
                    email: "ritikag@gmail.com",
                    isFav: true,

                },
                {
                    id: 3,
                    name : "Suraj K",
                    phone: "123-665-799",
                    email: "surajk@gmail.com",
                    isFav: false,

                },
            ]
        }
    }
    handleAddContact = (newContact) => {
        if (newContact.name==""){
            return {status: "failure", msg:"Please enter a valid name"};
        } else if (newContact.phone==""){
            return {status: "failure", msg:"Please enter a valid phone number"};
        }

        const duplicateRec = this.state.contactList.filter((x)=>{
            if (x.name==newContact.name && x.phone == newContact.phone) {
                return true;
            }
        })
        if (duplicateRec.length > 0){
            return{status:"failure", msg:"Duplicate Record"}
        }
        else{
        const newFinalContact = {...newContact,id:this.state.contactList[this.state.contactList.length - 1].id + 1, isFav:false,};
        this.setState((previousState) => {
            return {
                contactList: previousState.contactList.concat([newFinalContact]),
            };
        });
return{status:"success", msg:"Contact added successfully"}
    }
    }
    handleToggleFavourites = (contact) => {
        this.setState((prevState)=>{
            return{
                contactList: prevState.contactList.map((obj)=>{
                    if(obj.id==contact.id){
                        return{...obj, isFav: !obj.isFav}
                    }
                    return obj;
                })
            }

        })
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="container" style={{minHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact/>
                        </div>
                        <div className="col-4">
                            <RemoveAllContact/>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                            <AddContact handleAddContact={this.handleAddContact}/>
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <FavouriteContacts contacts={this.state.contactList.filter((u)=>u.isFav==true)} favouriteClick={this.handleToggleFavourites}/>
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <GeneralContacts contacts={this.state.contactList.filter((u)=>u.isFav==false)} favouriteClick={this.handleToggleFavourites}/>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>

            </div>
        )
    }
}

export default ContactIndex;