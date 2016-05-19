/*
 Test case for the noteApplication class
 */
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

// test cases for create method 

describe("NotesApplication create method", function(){

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

	it('assign last item in the note array to note content', function(){
		noteApp.create('Second Note');
		expect(noteApp.note[noteApp.note.length - 1]).toEqual('Second Note');
	});

});

// some test cases for delete method


describe("NotesApplication delete method", function(){

	beforeEach(function() {
		 noteApp = new NotesApplication('Kamil');
		 noteApp.delete('note id');
	});

	it('does not allows empty note_id', function(){
		expect(noteApp.delete('undefined')).toEqual('Please provide a valid Note ID');
	});

});

// test cases for edit method 

describe("NotesApplication edit method", function(){

	beforeEach(function() {
		 noteApp = new NotesApplication('Kamil');
		 noteApp.edit('note id');
	});
	
	it('does not allows note_id to be empty', function(){
		expect(noteApp.edit('Please provide a valid Note ID')).toEqual('Invalid Note ID');
	});
	
	it('Edit content cannot be empty', function(){
		expect(noteApp.edit('')).toEqual('Please add some notes!');
	});

});