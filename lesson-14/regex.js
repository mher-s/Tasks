function matchingCharacters(str) {
  let regex = /abc/;
  return str.match(regex);
}

// console.log(matchingCharacters("abcdefg"));
// console.log(matchingCharacters("abcde"));
// console.log(matchingCharacters("abc"));

function matchingDigits(str) {
  let regex = /\d/;
  return str.match(regex);
}

// console.log(matchingDigits("abc123xyz"));
// console.log(matchingDigits("define'123'"));
// console.log(matchingDigits("var g = 123;"));

function matchingFoo(str) {
  let regex = /\./; // \. makeing from . (all) to charecter .
  return str.match(regex);
}

// console.log(matchingFoo("cat."));
// console.log(matchingFoo("896."));
// console.log(matchingFoo("?=+."));
// console.log(matchingFoo("abc1"));

function matchingBaz(str) {
  let regex = /[cmf]/; //
  return str.match(regex);
}

// console.log(matchingBaz("can"));
// console.log(matchingBaz("man"));
// console.log(matchingBaz("fan"));
// console.log(matchingBaz("dan"));
// console.log(matchingBaz("ran"));
// console.log(matchingBaz("pan"));

function excludingCharacters(str) {
  let regex = /[^bog]/; //
  return str.match(regex);
}

// console.log(excludingCharacters("hog"));
// console.log(excludingCharacters("dog"));
// console.log(excludingCharacters("bog"));
function matchingCharacterRanges(str) {
  let regex = /[A-Z]/; //
  return str.match(regex);
}

// console.log(matchingCharacterRanges("Ana"));
// console.log(matchingCharacterRanges("Bob"));
// console.log(matchingCharacterRanges("Cpc"));
// console.log(matchingCharacterRanges("aax"));
// console.log(matchingCharacterRanges("bby"));
// console.log(matchingCharacterRanges("ccz"));

function matchingRepeatedCharacters(str) {
  let regex = /z{3,}/; //
  return str.match(regex);
}

// console.log(matchingRepeatedCharacters("wazzzzzup"));
// console.log(matchingRepeatedCharacters("wazzzup"));
// console.log(matchingRepeatedCharacters("wazup"));

function matchingRepeatedCharacters2(str) {
  let regex = /a{2,}b*c+/; //
  return str.match(regex);
}

// console.log(matchingRepeatedCharacters2("aaaabcc"));
// console.log(matchingRepeatedCharacters2("aabbbbc"));
// console.log(matchingRepeatedCharacters2("aacc"));
// console.log(matchingRepeatedCharacters2("a"));

function matchingOptionalCharacters(str) {
  let regex = /\d+/; // or can be just \?
  return str.match(regex);
}

// console.log(matchingOptionalCharacters("1 file found?"));
// console.log(matchingOptionalCharacters("2 files found?"));
// console.log(matchingOptionalCharacters("24 files found?"));
// console.log(matchingOptionalCharacters("No files found."));

function matchingWhitespaces(str) {
  let regex = /\s/; //
  return str.match(regex);
}

// console.log(matchingWhitespaces(" abc"));
// console.log(matchingWhitespaces("  abc"));
// console.log(matchingWhitespaces("   abc"));
// console.log(matchingWhitespaces("abc"));

function matchingLines(str) {
  let regex = /^Mission: successful$/;
  return str.match(regex);
}

// console.log(matchingLines("Mission: successful"));
// console.log(matchingLines("Last Mission: unsuccessful"));
// console.log(matchingLines("Next Mission: successful upon capture of target"));
// console.log(matchingLines(""));

function matchingGroups(str) {
  let regex = /^(file.+).pdf/;
  return str.match(regex);
}

// console.log(matchingGroups("file_record_transcript.pdf"));
// console.log(matchingGroups("file_07241999.pdf"));
// console.log(matchingGroups("testfile_fake.pdf.tmp"));

function matchingNestedGroups(str) {
  let regex = /(\D+\s(\d+))/;
  return str.match(regex);
}

// console.log(matchingNestedGroups("Jan 1987"));
// console.log(matchingNestedGroups("May 1969"));
// console.log(matchingNestedGroups("Aug 2011"));

function matchingNestedGroups2(str) {
  let regex = /(\d+)x(\d+)/;
  return str.match(regex);
}

// console.log(matchingNestedGroups2("1280x720"));
// console.log(matchingNestedGroups2("1920x1600"));
// console.log(matchingNestedGroups2("1024x768"));

function matchingConditionalText(str) {
  let regex = /(cats|dogs)/;
  return str.match(regex);
}

// console.log(matchingConditionalText("I love cats"));
// console.log(matchingConditionalText("I love dogs"));
// console.log(matchingConditionalText("I love logs"));
// console.log(matchingConditionalText("I love cogs"));
