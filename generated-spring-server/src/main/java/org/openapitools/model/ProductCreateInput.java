package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.math.BigDecimal;
import java.util.UUID;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * ProductCreateInput
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-04-08T10:47:06.539361157Z[Etc/UTC]", comments = "Generator version: 7.22.0-SNAPSHOT")
public class ProductCreateInput {

  private String name;

  private String description;

  private BigDecimal price;

  private String currency;

  private Integer stock;

  private @Nullable String thumbnail;

  private UUID categoryId;

  private UUID sellerId;

  public ProductCreateInput() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public ProductCreateInput(String name, String description, BigDecimal price, String currency, Integer stock, UUID categoryId, UUID sellerId) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.currency = currency;
    this.stock = stock;
    this.categoryId = categoryId;
    this.sellerId = sellerId;
  }

  public ProductCreateInput name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @NotNull @Size(min = 3, max = 100) 
  @Schema(name = "name", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("name")
  public String getName() {
    return name;
  }

  @JsonProperty("name")
  public void setName(String name) {
    this.name = name;
  }

  public ProductCreateInput description(String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @NotNull @Size(min = 10, max = 2000) 
  @Schema(name = "description", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("description")
  public String getDescription() {
    return description;
  }

  @JsonProperty("description")
  public void setDescription(String description) {
    this.description = description;
  }

  public ProductCreateInput price(BigDecimal price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * minimum: 0.01
   * @return price
   */
  @NotNull @Valid @DecimalMin(value = "0.01") 
  @Schema(name = "price", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("price")
  public BigDecimal getPrice() {
    return price;
  }

  @JsonProperty("price")
  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public ProductCreateInput currency(String currency) {
    this.currency = currency;
    return this;
  }

  /**
   * Get currency
   * @return currency
   */
  @NotNull @Size(min = 3, max = 3) 
  @Schema(name = "currency", example = "USD", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("currency")
  public String getCurrency() {
    return currency;
  }

  @JsonProperty("currency")
  public void setCurrency(String currency) {
    this.currency = currency;
  }

  public ProductCreateInput stock(Integer stock) {
    this.stock = stock;
    return this;
  }

  /**
   * Get stock
   * minimum: 0
   * @return stock
   */
  @NotNull @Min(value = 0) 
  @Schema(name = "stock", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("stock")
  public Integer getStock() {
    return stock;
  }

  @JsonProperty("stock")
  public void setStock(Integer stock) {
    this.stock = stock;
  }

  public ProductCreateInput thumbnail(@Nullable String thumbnail) {
    this.thumbnail = thumbnail;
    return this;
  }

  /**
   * Get thumbnail
   * @return thumbnail
   */
  
  @Schema(name = "thumbnail", example = "https://example.com/mouse.jpg", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("thumbnail")
  public @Nullable String getThumbnail() {
    return thumbnail;
  }

  @JsonProperty("thumbnail")
  public void setThumbnail(@Nullable String thumbnail) {
    this.thumbnail = thumbnail;
  }

  public ProductCreateInput categoryId(UUID categoryId) {
    this.categoryId = categoryId;
    return this;
  }

  /**
   * Get categoryId
   * @return categoryId
   */
  @NotNull @Valid 
  @Schema(name = "categoryId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("categoryId")
  public UUID getCategoryId() {
    return categoryId;
  }

  @JsonProperty("categoryId")
  public void setCategoryId(UUID categoryId) {
    this.categoryId = categoryId;
  }

  public ProductCreateInput sellerId(UUID sellerId) {
    this.sellerId = sellerId;
    return this;
  }

  /**
   * Get sellerId
   * @return sellerId
   */
  @NotNull @Valid 
  @Schema(name = "sellerId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("sellerId")
  public UUID getSellerId() {
    return sellerId;
  }

  @JsonProperty("sellerId")
  public void setSellerId(UUID sellerId) {
    this.sellerId = sellerId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductCreateInput productCreateInput = (ProductCreateInput) o;
    return Objects.equals(this.name, productCreateInput.name) &&
        Objects.equals(this.description, productCreateInput.description) &&
        Objects.equals(this.price, productCreateInput.price) &&
        Objects.equals(this.currency, productCreateInput.currency) &&
        Objects.equals(this.stock, productCreateInput.stock) &&
        Objects.equals(this.thumbnail, productCreateInput.thumbnail) &&
        Objects.equals(this.categoryId, productCreateInput.categoryId) &&
        Objects.equals(this.sellerId, productCreateInput.sellerId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, description, price, currency, stock, thumbnail, categoryId, sellerId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductCreateInput {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    stock: ").append(toIndentedString(stock)).append("\n");
    sb.append("    thumbnail: ").append(toIndentedString(thumbnail)).append("\n");
    sb.append("    categoryId: ").append(toIndentedString(categoryId)).append("\n");
    sb.append("    sellerId: ").append(toIndentedString(sellerId)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(@Nullable Object o) {
    return o == null ? "null" : o.toString().replace("\n", "\n    ");
  }
}

