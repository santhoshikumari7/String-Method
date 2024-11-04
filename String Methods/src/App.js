
import './App.css';

function App() {
  return (
    <div className="App">
      <button type='button' onClick={()=>{
        let data = "Mumbai Police is investigating the matter and trying to track down the sender of the message."
        console.log(data.toUpperCase());
        console.log(data.toLowerCase());
      }}>toUpperCase/toLoerCase</button>

      <button type='button' onClick={()=>{
        let fn = "Santhoshi";
        let ln = "Kumari";
        let fullName = fn.concat(ln);
        console.log(fullName);

        let fullName1 = `$(fn) $(ln)`
        console.log(fullName1)
        
      }}>concat</button>
      <button type='button' onClick={()=>{
        let quote = "   All Is Well   "
        console.log(`${quote.trim()}`);
        console.log(`${quote.trimStart()}`);
        console.log(`${quote.trimEnd()}`);
      }}>trim/trimStart/trimEnd</button>
      <button type='button' onClick={()=>{
        let quote = "All Is Well"
        console.log(quote.padStart(50,"A"));
        console.log(quote.padEnd(70, "L"))
      }}>padStrat/padEnd</button>

      <button type='button' onClick={()=>{
        let ramakoti = "jai sri ram";
        console.log(ramakoti.repeat(1008))
      }}>repeat</button>
      <button type='button' onClick={()=>{
        let quote = "Sri Rama Rama Ramethi Rame Raame Manorarame Sahasra Nama Thathulyam Rama Nama Varanane";
        console.log(quote)
        console.log(quote.replace("Sri Rama","Jai Sri Ram"));
        console.log(quote.replaceAll("Sri Rama","JAI Sri Ram"));
      }}>replace/replaceAll</button>
      <button type='button' onClick={()=>{
        let quote = "Sri Rama Rama Ramethi Rame Raame Manorarame Sahasra Nama Thathulyam Rama Nama Varanane";
        console.log(quote.split("r"));
        console.log(quote.split(" "));
      }}>split</button>
      <button type='button' onClick={()=>{
        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        console.log(alphabets.length);
        console.log(alphabets.charAt(0));
        console.log(alphabets.at(8));
        console.log(alphabets[11]);
      }}>length</button>
      <button type='button' onClick={()=>{
        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        console.log(alphabets.slice(7,11));
        console.log(alphabets.substring(7,11));
        console.log(alphabets.substr(7,11));
      }}>slice/subString/substr</button>
      <button type='button' onClick={()=>{
        let alphabets = "అఆఇఈఉఊఋఎఏఐఒఓఔఅంఅఃకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహ";
        let alphabets1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for (let i=3077;i<3500;i++){
           console.log(String.fromCharCode(i))
           //console.log(`${alphabets.charAt(i)}----${alphabets.charCodeAt(i)}`)
        }
        for(let k=0;k<alphabets1.length;k++){
          console.log(`${alphabets1.charAt(k)}---${alphabets1.charCodeAt(k)}`)
        }
        
      }}>charCodeAt</button>
     
     
     
    </div>
  );
}

export default App;
