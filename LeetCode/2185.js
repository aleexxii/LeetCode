const prefixCount = function (words, pref) {
  const length_of_prefix = pref.length;
  let count = 0;
  for (let word of words){
    count += word.substring(0, length_of_prefix) == pref ? 1 : 0
  }
  return count;
};

const words = [
  "udt", "ipbjt", "itjbniqf", "iwcsd", "iv", "ezljsxgrv", "ixkxv", "iwcyrwi", "ig", "iwrkov", "izm", 
  "imuusv", "iphigkdxxs", "g", "ildeyvbz", "ibywdj", "ifctnctguw", "ipqnn", "td", "iscvdjx", "ebsy", "cl",
  "ik", "ik", "ionapx", "ikhbyzyjq", "iuib", "ijobcngoob", "io", "iyvcuronb", "ivopadcf", "iw", "isd",
  "iiv", "xzxsfcgz", "ikusrhkqc", "sywa", "iw", "my", "ivojahjdl", "imxyhpttr", "ivpdleigq", "is", "iyxmbyssga",
  "igvjeuxnmf", "ircdd", "irz", "iwjlvbrunc", "yefbv", "ipcs", "wxvhccv", "ihythcmyj", "iwgvdonax", "irxozbyu", "vwtees",
  "ithdg","izhlb","kb","ieejxccn","byaf","ixip","cao","ipajauzv","iqxns",
  "iqpjkrpy", "iu", "puehsn", "iqxcavuat", "ycqewlca", "iaj",
];

console.log(prefixCount(words, 'i'));