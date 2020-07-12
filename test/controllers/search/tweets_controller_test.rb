require 'test_helper'

class Search::TweetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get search_tweets_index_url
    assert_response :success
  end

end
