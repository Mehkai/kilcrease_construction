Template.projectItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
    console.log(a.href);
  }
});
