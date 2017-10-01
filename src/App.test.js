import React from 'react';
import { shallow } from 'enzyme';
import ChordEditor from "./components/ChordEditor";


describe('<ChordEditor />',()=>{
  it('renders an editor area', () =>{
    const editor = shallow(<ChordEditor />);
    expect(editor.find('textarea').length).toEqual(1);
  });
  it('renders chord chart output', () => {
    const editor = shallow(<ChordEditor/>);
    const expectedOutput =
        '<table>'+
        '<tr>'+
        '<td class="chord"></td>'+
        '</tr>'+
        '<tr>'+
        '<td class="lyrics">Type some lyrics here</td>'+
        '</tr>'+
        '</table>';

    const realOutput = editor.find('div.chord-output').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });
});


