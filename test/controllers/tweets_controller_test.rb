require 'test_helper'

class TweetsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tweets_create_url
    assert_response :success
  end

end
