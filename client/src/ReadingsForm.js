import React, {Component} from 'react';

class ReadingsForm extends Component {

  render(){
    return <div>
      <form>
        <input type='hidden' id="lat" label="lat" value=""/>
        <input type='hidden' id="long" label="lng" value=""/>
          Reading:<br/><input type="text" id="reading" label="reading"/>
        <input type="submit" id="save" value="save"/>
        </form>
    </div>
  }
}

export default ReadingsForm;



// $("#save").click(function(){
//   var subjectId = $("#subjectId").val();
//   var front = $("#front").val();
//   var back = $("#back").val();
//   CardService.createNewCard(subjectId, front, back, function(){})
//   $(".new_holder").remove();
// });
