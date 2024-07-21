# devcow85.github.io
- devcow85's page
- test git update

# 권한 수정
sudo chown -R $(whoami) /Library/Ruby/Gems
# install Jekyll
brew install ruby

# add path on ~/.zprofile
if [ -d "/opt/homebrew/opt/ruby/bin" ]; then
  export PATH=/opt/homebrew/opt/ruby/bin:$PATH
  export PATH=`gem environment gemdir`/bin:$PATH
fi

# install bundler and jekyll 
gem install bundler jekyll
