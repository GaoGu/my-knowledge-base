## Git基础知识

#### 在Windows上安装Git
从Git官网直接下载安装程序，然后按默认选项安装即可。
安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！
#### 用户名和邮箱地址的作用

	用户名和邮箱地址是本地git客户端的一个变量，不随git库而改变。
	每次commit都会用用户名和邮箱纪录。
	github的contributions统计就是按邮箱来统计的。
#### 修改用户名和邮箱地址：

	$ git config --global user.name "username"
	$ git config --global user.email "email"
#### 查看用户名和邮箱地址：

	$ git config user.name
	$ git config user.email
#### 查看git配置：

	$ git config --list
#### git代理设置（一般用于公司内部网络）

	$ git config --global http.proxy ip:port
#### 查看代理：

	$ git config http.proxy
#### 取消代理

	$ git config --global --unset http.proxy
	$ git config --global --unset https.proxy
#### 初始化一个Git仓库

	$ git init
#### 添加文件到Git仓库

	$ git add <file>
	//注意，可反复多次使用，添加多个文件
    $ git commit -m "wrote a file"

提交所有文件

	git add . 

如果你觉得 git add 提交缓存的流程太过繁琐，Git 也允许你用 -a 选项跳过这一步。命令格式如下：

	git commit -a -m ""

如果你没有设置 -m 选项，Git 会尝试为你打开一个编辑器以填写提交信息。 如果 Git 在你对它的配置中找不到相关信息，默认会打开 vim。屏幕会像这样：

	# Please enter the commit message for your changes. Lines starting
	# with '#' will be ignored, and an empty message aborts the commit.
	# On branch master
	# Changes to be committed:
	#   (use "git reset HEAD <file>..." to unstage)
	#
	# modified:   hello.php
	#
	~
	~
	".git/COMMIT_EDITMSG" 9L, 257C
#### 查看工作区的状态

	$ git status
#### 查看修改内容

	$ git diff
#### 查看指定文件工作区和版本库里面最新版本的区别

	$ git diff HEAD -- <file>
#### 查看历史记录
	
	$ git log
#### 更漂亮的查看历史记录

	$ git log --pretty=oneline
	3628164fb26d48395383f8f31179f24e0882e1e0 append GPL
	ea34578d5496d7dd233c827ed32a8cd576c5ee85 add distributed
	cb926e7ea50ad11b8f9e909c05226233bf755030 wrote a readme file
3628164...882e1e0的是commit id（版本号）

#### 版本回退

	$ git reset --hard HEAD^
上一个版本就是HEAD^，上上一个版本就是HEAD^^，
往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
#### 通过`commit id`指定回到未来的某个版本：

	$ git reset --hard 3628164
#### 查看命令历史

	$ git reflog
#### 直接丢弃工作区的修改

	$ git checkout -- <file>
这里有两种情况：
一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
总之，就是让这个文件回到最近一次git commit或git add时的状态。######

#### 把暂存区的修改回退到工作区

	$ git reset HEAD <file>
#### 从版本库删除文件
	
	$ git rm <file>
	$ git commit -m "remove file"
### 本地git连接github远程仓库
#### 创建SSH Key

	$ ssh-keygen -t rsa -C "youremail@example.com"
在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，id_rsa.pub是公钥
登陆GitHub，打开“settings”，“SSH and GPG Keys”页面,然后点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容,点“Add Key”
#### 验证与github远程库连接是否成功

	$ ssh -T git@github.com
#### 查看具体信息

	$ ssh -T -v git@github.com
#### 把本地库的内容推送到远程
在Github点击"New repository"按钮，创建一个新的仓库，在填入Repository name，其他保持默认设置，点击"Create repository"按钮，就成功地创建了一个新的Git仓库
把本地库的内容推送到远程

	$ git remote add origin git@github.com:GaoGu/learngit.git
	$ git push -u origin master
从现在起，只要本地作了提交，就可以通过命令：

	$ git push origin master
#### 从远程库克隆到本地
在Github创建仓库时，勾选`Initialize this repository with a README`，这样GitHub会自动为我们创建一个README.md文件。
用命令git clone克隆一个本地库：

	$ git clone git@github.com:GaoGu/gitskills.git
### 创建和合并分支
Git鼓励大量使用分支：

#### 查看分支：

	git branch

#### 创建分支：

	git branch <name>

#### 切换分支：

	git checkout <name>

#### 创建+切换分支：

	git checkout -b <name>

#### 合并某分支到当前分支：

	git merge <name>
当当前分支和某分支有相同文件修改时
Git无法自动合并分支时会发生冲突，强行使用`git merge <name>`后
Git用`<<<<<<<，=======，>>>>>>>`标记出不同分支的内容
用`git log --graph`命令可以看到分支合并图
	
	$ git log --graph --pretty=oneline --abbrev-commit
通常，合并分支时，如果可能，Git会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息。
使用`--no-ff`参数合并分支，表示禁用`Fast forward`模式

	$ git merge --no-ff -m "merge with no-ff" <name>
合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。
#### 删除分支：
	
	$ git branch -d <name>
强行删除
	$ git branch -D <name>
#### `stash`功能
把当前工作现场“储藏”起来

	$ git stash

恢复现场

	$ git stash apply
但是恢复后，`stash`内容并不删除，你需要用`git stash drop`来删除
另一种方式是用`git stash pop`，恢复的同时把`stash`内容也删了

	$ git stash pop
查看`stash`

	$ git stash list
	stash@{0}: WIP on dev: 6224937 add merge
可以多次`stash`,先用`git stash list`查看，然后恢复指定的`stash`

	$ git stash apply stash@{0}
#### 查看远程库的信息
	
	$ git remote
	$ git remote -v
#### 推送分支
	
	$ git push origin <branch-name>
如果推送失败，先用`git pull`抓取远程的新提交,如果有冲突，要先处理冲突
#### 创建远程origin的分支到本地

	$ git checkout -b <branch-name> origin/<branch-name>
#### 建立本地分支和远程分支的关联

	$ git branch --set-upstream <branch-name> origin/<branch-name>
#### 创建标签

	$ git tag <tagname>
给历史提交,`commit id`为`6224937`打标签

	$ git tag <tagname> 6224937
查看标签

	$ git tag 
创建带有说明的标签，用-a指定标签名，-m指定说明文字：

	$ git tag -a <tagname> -m "this is tag" <commit id>
通过-s用私钥签名一个标签

	$ git tag -s <tagname> -m "this is tag" <commit id>
签名采用PGP签名，因此，必须首先安装gpg（GnuPG），如果没有找到gpg，或者没有gpg密钥对，就会报错：

	gpg: signing failed: secret key not available
	error: gpg failed to sign the data
	error: unable to sign the tag
如果报错，请参考GnuPG帮助文档配置Key。

#### 查看说明文字或PGP签名

	$ git show <tagname>
#### 删除标签
	
	$ git tag -d <tagname>

#### 推送某个标签到远程
	
	$ git push origin <tagname>
推送全部尚未推送到远程的本地标签

	$ git push origin --tags
#### 删除远程标签

	$ git tag -d <tagname>
	$ git push origin :refs/tags/<tagname>
#### 使用GitHub
在GitHub上，可以任意Fork开源仓库；

自己拥有Fork后的仓库的读写权限；

可以推送pull request给官方仓库来贡献代码。
#### 自定义Git
让Git显示颜色
	
	$ git config --global color.ui true
#### lock
fatal: Unable to create 'E:/workspaceGit/Git/.git/index.lock': File exists.
解决方法
rm -f  /.git/index.lock'
