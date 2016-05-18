function NotesApplication(author){
	this.author = author;
	this.note = [];
	this.create = function(note_content){
		if(note_content){
			this.note.push(note_content);
			return note_content + "\n" + "New Note Content created Successfully";
		}else{
			return "note content can not be empty!"
		}
	};
	this.listNotes = function(){
		var note_lists;
		for(i = 0; i < this.note.length; i++){
			note_lists='';
			note_lists += 'Note ID: '+ i + '\n' + this.note[i] + '\n' + 'Authored by:  ' + this.author + '\n';
			return note_lists;
		}
	};

	this.get = function(note_id) {
		if (!(isNaN(note_id))) {
			return this.notes[note_id];
		}
		else {		
			return 'Please supply a valid Note ID Number';
		}
	};

	this.search = function(search_text){
		var search_string ='';
		search_string += 'Showing results for search  '+ search_text + '\n';
		for(i = 0; i < this.note.length; i++){
			if(this.note[i].search(search_text) != -1){
				search_string += 'Note ID: '+ i + '\n' + this.note[i] + '\n' + 'By:  ' + this.author + '\n';
				return search_string;
			}
		}
	};
	
	this.edit = function(note_id, new_content){
		if(!(isNaN(note_id))  || (note_id >= this.note.length)){
			if(new_content){
				this.note[note_id] = new_content;
				return 'Edit Successful';
			}
			else{
				return 'Please add some notes!';
			}
		}
		return 'Invalid Note ID';
	};

	this.delete = function(note_id){
		if(!(isNaN(note_id))){
			this.note.slice(note_id, 1);
			console.log( 'Note ID: ' + note_id + ' deleted Successfully!');
		}else{
			return 'Please provide a valid Note ID';
		}
	};

}
