class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @tweets = Tweet.all
  end
  def create
    @tweet = Tweet.new(tweet_prams)
    binding.pry
    if @tweet.save
      redirect_to tweets_path

    else

    end
  end

  private
  def tweet_prams
    params.require(:tweet).permit(:body, :image, :parent_id)
  end
end
