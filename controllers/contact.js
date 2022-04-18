let Contact = require('../models/contact');
const contact = require('../models/contact');
const e = require('express');

module.exports.contactList = function(req, res, next) {  
    
    Contact.find((err, contactList) => {
        
        if(err)
        {
            return console.error(err);
        }
        else
        {
            // console.log(movieList);
            res.render('contact/list', 
            {
                title: 'Contact List', 
                ContactList: contactList
            })            
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE        
    let newItem = Contact();

    res.render(
        'contact/add_edit',
        {
            title: 'Add a new contact',
            contact: newItem
        }
    )
}

module.exports.processAddPage = (req, res, next) => {

    // ADD YOUR CODE HERE
    let newItem = Contact(
        {
            _id: req.body.id,
            personID: req.body.personID,
            CName: req.body.CName,
            email: req.body.email,
            number: req.body.number
        }
    );
    Contact.create(
        newItem,(err,contact) =>{
        if(err)
        {
            console.Console.log(err);
            res.end(err);
        }
        else
        {
            console.log(contact);
            res.redirect('/contact/list');
        }
    });

}

// Gets a movie by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;

    Contact.findById(id,
        (err, itemToEdit) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                res.render(
                    'contact/add_edit',
                    {
                        title:'Edit contact',
                        contact: itemToEdit
                    }
                )
            }
        })

}

// Processes the data submitted from the Edit form to update a movie
module.exports.processEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id

    let updatedItem = Contact(
        {
            _id: req.body.id,
            personID: req.body.personID,
            CName: req.body.CName,
            email: req.body.email,
            number: req.body.number
        }
    );
    Contact.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact/list');
        }
    });
    
}

// Deletes a movie based on its id.
module.exports.performDelete = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact/list');
        }
    });

}