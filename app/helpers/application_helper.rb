module ApplicationHelper
  def render_svg(name)
    file_path = "#{Rails.root}/app/assets/images/#{name}.svg.erb"
    File.read(file_path).html_safe
  end
end
