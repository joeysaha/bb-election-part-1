document.addEventListener("DOMContentLoaded", function() {

  // Imagination!

  const candidate = document.querySelector('#elect');
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    data: {},
    dataType: 'json'
  }).done((responseData)=>{
    // console.log('done', responseData);
    for (var i = 0; i < responseData.candidates.length; i++) {
      let list = document.createElement('li');
      // list.innerText = `${responseData.candidates[i].name} has ${responseData.candidates[i].votes}.`
      // candidate.append(list);
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      p1.innerText = `Name: ${responseData.candidates[i].name}.`;
      p2.innerText = `Votes: ${responseData.candidates[i].votes}.`;
      list.innerText = `Candidate ${i+1}: \n`
      list.append(p1);
      list.append(p2);
      candidate.append(list);
    }
  });
});
