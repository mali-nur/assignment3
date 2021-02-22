function myFunction() {
    var startingbid = 500;
    var EducationValue = Number(document.getElementById("education").value);
    var final1 = startingbid * EducationValue;

    var FamilyValue = Number(document.getElementById("networth").value);
    var final2 = final1 * FamilyValue;

    var SkillsValue = Number(document.getElementById("skills").value);
    var final3 = final2 + SkillsValue;

    document.getElementById("demo1").innerHTML = "Price:" + final3;
}