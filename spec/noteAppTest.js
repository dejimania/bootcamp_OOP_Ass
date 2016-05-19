/*describe("NotesApplication",function(){
 	it("should return 'invalid author' for an empty author", function(){
		newNote = new NotesApplication("");
 		console.log( newNote);
 		expect(newNote).toEqual({  });
 	});
 });*/
 'use strict';
 
var noteApp;

// test for creating new objects

describe("NotesApplication", function(){
	beforeEach(function() {
		  noteApp = new NotesApplication('Kamil');
	});

	it("should initialize an empyt array, note", function(){
		expect(noteApp.note).toEqual([]);
	});

	it("should have author Kamil", function(){
		expect(noteApp.author).toEqual("Kamil");
	});

	
});

// test for create method 

describe("NotesApplication create function", function(){

	beforeEach(function() {
		 noteApp = new NotesApplication('Kamil');
		 noteApp.create('First Note');
	});

	it('First note successfully created as first index', function(){
		expect(noteApp.note[0]).toEqual('First Note');
	});

	it('does not allows empty note to be created', function(){
		expect(noteApp.create('')).toEqual('note content can not be empty!');
	});

	it('returns note created after creating note', function(){
		expect(noteApp.create('some note')).toEqual('New Note Content created Successfully');
	});

	it('assign last item in the note array to note content', function(){
		noteApp.create('Second Note');
		expect(noteApp.note[noteApp.note.length - 1]).toEqual('Second Note');
	});

});