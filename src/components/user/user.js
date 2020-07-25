import { inject } from "aurelia-framework";
@inject(Element)
export class User {
  constructor(element) {
    this.element = element;
    this.users = [
      {
        account: "admin",
        name: "测试管理员",
        group: "管理员",
        state: "正常",
      },
      {
        account: "user",
        name: "用户",
        group: "测试用户",
        state: "正常",
      },
    ];
    this.contextmenu = ["修改", "删除"];
    this.sideshow = "display:none";
    this.sidebarmenu = "ui vertical sidebar menu right";
    this.newname = "";
    this.newaccount = "";
    this.newgroup = "";
    this.newstate = "";
    this.usergridshow = "display:none";
    this.systemgridshow = "";
    this.homeStyleString =
      "border-bottom-style: solid; border-bottom-color: rgb(33,133,208);";
  }

  update() {
    window.location.reload(true);
    showsidebar().click();
  }

  showsidebar() {
    this.sidebarmenu =
      "ui inverted vertical sidebar menu right overlay visible";
  }

  adduser() {
    this.newuser = {
      account: this.newaccount,
      name: this.newname,
      group: this.newgroup,
      state: this.newstate,
    };
    console.log(this.newuser);
    if (
      this.newaccount != "" &&
      this.newname != "" &&
      this.newgroup != "" &&
      this.newstate != ""
    ) {
      this.users.push(this.newuser);
    }
  }

  clear() {
    this.newname = "";
    this.newaccount = "";
    this.newgroup = "";
    this.newstate = "";
  }
  sort() {
    this.sorteduser(
      this.users.map(() => this.users[i].account - this.users[i + 1].account)
    );
    console.log(thi.users);
  }

  user() {
    this.userStyleString =
      "border-bottom-style: solid; border-bottom-color: rgb(33,133,208);";
    this.homeStyleString = "";
    this.usergridshow = "";
    this.systemgridshow = "display:none";
  }
  home() {
    this.userStyleString = "";
    this.homeStyleString =
      "border-bottom-style: solid; border-bottom-color: rgb(33,133,208);";
    this.usergridshow = "display:none";
    this.systemgridshow = "";
  }

  test() {
    console.log(this.element);
  }
}
