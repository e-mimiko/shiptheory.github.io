async function get_data(url)
{
    try 
    {
        const resp = await fetch(url);
        if (!resp.ok)
        {
            throw new Error(`Response: ${resp.status}`)
        }
        const data = await resp.text();
        console.log(data)
    }
    catch (error)
    {
        console.log(error.message)
    }
    
}

get_data("https://docs.google.com/spreadsheets/d/e/2PACX-1vTtC3PYU5Je_yQGaSHAH4axc8ey9w6VO0yk2JEh86JpbKxo8ZJmFGoHLFzZTfAtjV7ISWOIwhrReAvu/pub?output=csv")