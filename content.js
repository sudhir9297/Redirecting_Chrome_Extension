window.onload=function(){
    // getting the title of the Page 
    title=document.title.toLocaleLowerCase()

    // getting the list of metas in a page ....there could be many
    const metas=document.getElementsByTagName('meta')

    //lets check for title first  
    if (title.includes("videos")){
        window.location="https://www.google.com/"  
    }

    //getting through the list of metas and checking the name attributes 
    for (let i=0;i<metas.length;i++)
    {  
        desc=metas[i].getAttribute('name')
        //this is to ensure that we have the value from name attributes ...there could be a possibility that name attributes does  not exist in meta 
        if (desc=="description"){  
           val=metas[i].getAttribute('content').toLowerCase()
            if(val.indexOf('videos')>-1){
                window.location="https://www.google.com/"  
            }
            
        }
        
    }
    
}
