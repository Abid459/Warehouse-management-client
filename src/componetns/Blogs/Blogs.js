import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="blogs-container">
                <div>
                <p><b>Question:</b>Differences between javascript and nodejs</p>
                <p><b>Answer:</b>JavaScript is a programming language. Javascript is used to write scripts on a website to make a web page dynamic. Also, Javascript only runs on the browser. jS is used in front-end development.
                <br />
                <i>On the other hand,</i> Node js is a runtime environment for javascript, that let us use javascript on the server site. Node js use chrome V8 engine to 'just in time compile' and thus run JS in back end development
                </p>
                </div>
                <div>
                <p><b>Question:</b>When should you use nodejs and when should you use mongodb</p>
                <p><b>Answer:</b>
                Node js is javascript runtime and mongodb is a database. We should use node js to write code for back-end development of a web page. Node js is used to make api, through which client site communicate with server and database. Mongodb is teh database where we can store data for our website
                </p>
                </div>
                <div>
                <p><b>Question: </b>Differences between sql and nosql databases.</p>
                <p><b>Answer: </b> </p>
                <ul>
                    <li>SQL are relational database, NoSql database non-relational distributed database</li>
                    <li>SQL database are table based, noSQL database are document,ket-value or wide-column stores</li>
                    <li>SQL database are vertically scalable, NoSQL database are horizontally scalable</li>
                    <li>SQL are better for multi-row transactions, NoSQL are bette for unstructured data like JSON</li>
                </ul>
               
                </div>
                <div>
                <p><b>Question:</b>What is the purpose of jwt and how does it work</p>
                <p><b>Answer:</b> The purpose of jwt is to securely transfer data between two parties. Like client and server
                <br />
                How does it work: <br />
                JWT contains three parts 1. The header 2. The payload 3. The signature
                The header contains the type o token. The payload contains claims and The signature ensures that the token hasn't been altered
                <br />
                The parties created the JWT signs the header and payload with a secret that is known to both the issuer and receiver, When the token is issued the receiving party verified that the header and payload match the signature. This ensures the security of data transfer 
                </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;