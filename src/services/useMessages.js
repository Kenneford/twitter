import { useState, useEffect } from "react";


/* const serverUrl="https://mini2-2twitter.herokuapp.com"  */


const useMessages = () => {

  const [messages, setMessages] = useState();
 
  useEffect(() => {
/*     if (id!==undefined) {

    fetch(`https://mini2-2twitter.herokuapp.com/messages/${id}`)     
      .then((res) => res.json())

      .then(data=>{ setMessages(data[0]);
       console.log(data);} )
            
      .catch((e) => console.log(e.message));}
    else  { */
        console.log("Hello");
    fetch("https://mini2-2twitter.herokuapp.com/messages")     
        .then((res) => res.json())
        .then(data=> setMessages(data))
         /* console.log(data); */     
        .catch((e) => console.log(e.message));
    



  }, []);

    console.log(messages);
    if (!messages) return null;
  return messages;
};

export default useMessages;