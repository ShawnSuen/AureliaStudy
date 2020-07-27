import { inject } from "aurelia-framework";
import { obj } from "through2";

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

    this.i = -1;

    this.contextmenu = ["修改", "删除"];
    this.sideshow = "display:none";
    this.sidebarmenu = "ui vertical sidebar menu right";
    this.sidebaruser = "ui vertical sidebar menu right";

    this.newname = "";
    this.newaccount = "";
    this.newgroup = "";
    this.newstate = "";

    this.changename = "";
    this.changeaccount = "";
    this.changegroup = "";
    this.changestate = "";

    this.usergridshow = "display:none";
    this.systemgridshow = "";
    this.homeStyleString =
      "border-bottom-style: solid; border-bottom-color: rgb(33,133,208);";
    this.main = this.element.getElementsByClassName("column");
    console.log(this.main);
    this.innerHTML = "<span></span>";

    this.flag = true;
    this.userflag = true;

    this.target;
    this.target1;
    this.handleBodyClick = (e) => {
      this.target = e.target.innerText;
    };
  }

  update() {}

  showsidebar() {
    this.flag1 = this.flag;
    if (this.flag1 == true) {
      this.sidebarmenu =
        "ui inverted vertical sidebar menu right overlay visible";
      console.log("show" + this.flag1);
      this.flag1 = false;
    } else {
      this.sidebarmenu = "ui vertical sidebar menu right";
      this.flag1 = true;
    }
    this.flag = this.flag1;
    this.sidebaruser = "ui vertical sidebar menu right";
  }

  usersidebar() {
    this.target1 = this.target;
    this.flag1 = this.userflag;
    if (this.flag1 == true) {
      this.sidebaruser =
        "ui inverted vertical sidebar menu right overlay visible";
      console.log("target1" + this.target1);
      this.flag1 = false;
    } else {
      this.sidebaruser = "ui vertical sidebar menu right";
      this.flag1 = true;
    }
    this.userflag = this.flag1;
    this.sidebarmenu = "ui vertical sidebar menu right";
  }

  adduser() {
    this.newuser = {
      account: this.newaccount,
      name: this.newname,
      group: this.newgroup,
      state: this.newstate,
    };
    if (
      this.newaccount != "" &&
      this.newname != "" &&
      this.newgroup != "" &&
      this.newstate != ""
    ) {
      this.users.push(this.newuser);
      this.update();
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

  /*
  usergrid(users = []) {
    for (this.i = 0; this.i < users.length; this.i++) {
      this.innerHTML =
        this.innerHTML +
        '<div class="ui grid" id="user"style="margin-top:12px;border-bottom:rgb(177, 175, 175) solid;">' +
        '<div class="four wide column">' +
        '<button class="userbutton" click.tragger="adduser()">' +
        this.users[this.i].account +
        "</button></div>" +
        '<div class="four wide column"><span>' +
        this.users[this.i].name +
        "</span></div>" +
        '<div class="four wide column"><span>' +
        this.users[this.i].group +
        "</span></div>" +
        '<div class="four wide column"><span>' +
        this.users[this.i].state +
        "</span></div></div>";
    }
  }
*/
  //修改用户界面
  changeuser() {
    console.log(11111);
    for (this.i = 0; this.i < this.users.length; this.i++) {
      if (this.target1 == this.users[this.i].account) {
        if (
          this.changeaccount != "" &&
          this.changename != "" &&
          this.changegroup != "" &&
          this.changestate != ""
        ) {
          this.users[this.i].account = this.changeaccount;
          this.users[this.i].name = this.changename;
          this.users[this.i].group = this.changegroup;
          this.users[this.i].group = this.changestate;
          console.log(this.user[this.i]);
          this.i = -1;
          break;
        }
      }
    }
  }

  // changeuser() {
  //   if (
  //     this.changeraccount != "" &&
  //     this.changname != "" &&
  //     this.changegroup != "" &&
  //     this.changestate != ""
  //   ) {
  //     this.users[this.i] = {
  //       acconut: this.changeacconut,
  //       name: this.changename,
  //       group: this.changegroup,
  //       state: this.changestate,
  //     };
  //   }
  //   this.i = -1;
  // }
  test() {}
  changemenu() {
    this.changemenuStyle = "display:block";
  }

  attached() {
    document.addEventListener("click", this.handleBodyClick);
  }

  detached() {
    document.removeEventListener("click", this.handleBodyClick);
  }
}
