import os

def git_operation():
    '''
    git 命令行函数，将仓库提交
    
    ----------
    需要安装git命令行工具，并且添加到环境变量中
    '''
    os.system('git add .')
    os.system('git commit -m "save"')
    os.system('git push origin master')

if __name__ == "__main__":
    git_operation()