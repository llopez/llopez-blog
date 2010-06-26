require 'haml-coderay'
DOMAIN_URL = "http://llopez.heroku.com"  
FEED_URL = "/feed/atom.xml"
module Helpers
  
  def image(image_path, options={})
    options.merge!({:src => "/images/#{image_path}"})
    haml_tag :img, options
  end
  
  def tags(page_or_site)    
    tags = page_or_site.tags
    tags.is_a?(Hash) ? tags.keys.join(",") : tags.join(",")
  end
  
  def title(page)
    ">_ /posts/" + page.categories.join("/") + "/" + page.title.gsub(" ","_")
  end
  
  def categories(post)
    post.categories.collect do |category|
      haml_tag :span,{:class => category} do
        haml_tag :a, {:href => "/#{category}.html", :title => "ir a categoria #{category}" } do  
          haml_concat "--#{category}"
        end
      end
    end
  end
  
end