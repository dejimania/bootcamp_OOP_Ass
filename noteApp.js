function NotesApplication(author){
	if((typeof author == 'string') && (author)){
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
	}else {
		return "Please provide the author Name."
	}
		this.listNotes = function(){
			var note_lists;
			for(i = 0; i < this.note.length; i++){
				note_lists='';
				note_lists += 'Note ID: '+ i + '\n' + this.note[i] + '\n' + 'Authored by:  ' + this.author + '\n';
				return note_lists;
			}
		};

		this.get = function(note_id) {
			if((!(isNaN(note_id)))) {
				var display_a = this.note[note_id];
				return display_a;
			}
			else {		
				return 'Please supply a valid Note ID Number';
			}
		};

		this.search = function(search_text){
			var search_string='';
			var found = true;
			search_string += 'Showing results for search  '+ search_text+ '\n';
			for(var i = 0; i < this.note.length; i++){
				if(this.note[i].toLowerCase().includes(search_text.toLowerCase())){
					search_string += 'Note ID: '+ i + '\n' + this.note[i] + '\n' + 'By Author  ' + this.author + '\n';
					return search_string;
					found = false; 
				}
			}
			if(found){
				console.log('No matches for '+ search_text);
			}
		};
		
		this.edit = function(note_id, new_content){
			if(!(isNaN(note_id))){
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
				this.note.splice(note_id, 1);
				console.log( 'Note ID: ' + note_id + '\t' + ' deleted Successfully!');
			}else{
				return 'Please provide a valid Note ID';
			}
		};
	
}
