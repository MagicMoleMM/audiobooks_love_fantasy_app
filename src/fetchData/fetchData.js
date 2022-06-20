

export default function FetchData() {


  

    
        const fetchData = async () => {
            await fetch('http://localhost:3002/serials')
                .then(res => res.json())
                
        }
        fetchData()
        
  

    

}