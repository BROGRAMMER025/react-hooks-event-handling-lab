// Code Keypad Component Here

function Keypad (){
    const handleChange = () => {
        console.log('Entering password...');
      };
    
      return (
        <div>
          <label>
            Enter Password:
            <input type="password" onChange={handleChange} />
          </label>
        </div>
      );
}


export default Keypad;